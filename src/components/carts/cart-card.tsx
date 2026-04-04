import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { rupiahFormatter } from "@/utils/rupiah-formatter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddToCartDto,
  CartItemRes,
  RemoveFromCartDto,
} from "@/types/carts-interface";
import { cartApi } from "@/services/cart-api";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { checkoutSlice } from "@/lib/features/checkout-item";

type CartCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  origPrice: number;
  discPrice?: number | null;
  qty: number;
  className?: string;
};

export default function CartCard({
  id,
  name,
  imageUrl,
  category,
  origPrice,
  discPrice,
  qty,
  className,
}: CartCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useAppDispatch();
  const checkoutItems = useAppSelector(
    (state: RootState) => state.checkoutSlice.items,
  );
  const isChecked = checkoutItems.some((i) => i.id === id);
  const toggleItem = checkoutSlice.actions.toggleItem;

  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: (req: AddToCartDto[]) => cartApi.addToCart(req),

    onMutate: async (req) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previousCart = queryClient.getQueryData<CartItemRes[]>(["cart"]);

      queryClient.setQueryData<CartItemRes[]>(["cart"], (old = []) => {
        const updated = [...old];

        req.forEach((r) => {
          const index = updated.findIndex((i) => i.id === r.productId);

          if (index !== -1) {
            updated[index] = {
              ...updated[index],
              qty: updated[index].qty + r.quantity,
            };
          }
        });

        return updated;
      });

      return { previousCart };
    },

    onError: (_err, _req, context) => {
      queryClient.setQueryData(["cart"], context?.previousCart);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: (req: RemoveFromCartDto[]) => cartApi.removeFromCart(req),

    onMutate: async (req) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previousCart = queryClient.getQueryData<CartItemRes[]>(["cart"]);

      queryClient.setQueryData<CartItemRes[]>(["cart"], (old = []) => {
        const updated = [...old];

        req.forEach((r) => {
          const index = updated.findIndex((i) => i.id === r.productId);

          if (index !== -1) {
            const item = updated[index];

            if (item.qty <= r.quantity) {
              updated.splice(index, 1);
            } else {
              updated[index] = {
                ...item,
                qty: item.qty - r.quantity,
              };
            }
          }
        });

        return updated;
      });

      return { previousCart };
    },

    onError: (_err, _req, context) => {
      queryClient.setQueryData(["cart"], context?.previousCart);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <Link
      key={id}
      className={`bg-card p-c-3 rounded-c-5 flex items-stretch gap-c-3 cursor-pointer ${className}`}
      href={`/product/${id}`}
    >
      <section className="flex items-center gap-c-3">
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Checkbox
            className="size-c-6 cursor-pointer"
            checked={isChecked}
            onCheckedChange={() => {
              dispatch(
                toggleItem({
                  id,
                  name,
                  imageUrl,
                  origPrice,
                  discPrice,
                  qty,
                }),
              );
            }}
          />
        </div>

        <div className="bg-[#F132F2] dark:bg-[#2A202A] p-c-5 rounded-c-5 w-c-35 min-h-full sm:h-c-30 grid place-items-center">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            className="object-contain h-full sm:h-c-20"
            alt={name}
          />
        </div>
      </section>
      <section className="flex items-center gap-c-4 w-full overflow-hidden">
        <div className="w-full grid sm:flex ">
          <div className="overflow-hidden w-full text-c-5">
            <p className="font-bold truncate">{name}</p>
            <p className="text-muted-foreground">{category}</p>
          </div>
          <div className="grid sm:flex gap-c-3 w-full">
            <div className="flex gap-c-2 items-center sm:w-c-30 sm:order-2 justify-start sm:justify-end sm:ml-auto">
              {discPrice && (
                <p className="text-c-4 text-muted-foreground line-through ">
                  {rupiahFormatter.format(origPrice * qty)}
                </p>
              )}
              <h3 className="text-c-5 font-bold text-pink-500 sm:text-end ">
                {rupiahFormatter.format(discPrice ?? origPrice * qty)}
              </h3>
            </div>
            <div className="flex items-center gap-c-3 sm:ml-auto">
              <Button
                size="icon"
                className="size-c-10!"
                disabled={removeFromCartMutation.isPending}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  removeFromCartMutation.mutate([
                    {
                      productId: id,
                      quantity: 1,
                    },
                  ]);
                }}
              >
                <MinusIcon className="size-c-5 stroke-3" />
              </Button>

              <span className="text-c-5">{qty}</span>
              <Button
                size="icon"
                className="size-c-10!"
                disabled={addToCartMutation.isPending}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  addToCartMutation.mutate([
                    {
                      productId: id,
                      quantity: 1,
                    },
                  ]);
                }}
              >
                <PlusIcon className="size-c-4 stroke-3" />
              </Button>
            </div>
          </div>
        </div>
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger
            asChild
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Button
              size="icon"
              className="size-c-10! text-pink-500"
              variant={"outline"}
              onClick={(e) => {
                e.stopPropagation();

                removeFromCartMutation.mutate([
                  {
                    productId: id,
                    quantity: qty,
                  },
                ]);
              }}
            >
              <X className="size-c-5" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-c-6">
                Delete this item?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-c-4! text-muted-foreground">
                Poof 💨 Gone forever. You sure you wanna remove this from your
                cart?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                Oops, cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-pink-500 hover:bg-pink-600"
                onClick={(e) => {
                  // dispatch(deleteItem(id))
                  e.stopPropagation();
                }}
              >
                Yup, delete it
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </Link>
  );
}
