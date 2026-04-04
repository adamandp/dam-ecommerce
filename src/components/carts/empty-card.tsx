import { ArrowLeft, Link } from "lucide-react";
import { Button } from "../ui/button";

export default function EmptyCard() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-c-3 p-c-6 rounded-xl bg-muted/40 border border-muted shadow-sm mt-c-10">
      <p className="text-c-6 font-semibold">
        🛒 Oops! Your cart is feeling lonely.
      </p>
      <p className="text-c-5 text-muted-foreground max-w-c-100">
        Looks like you haven&apos;t added anything yet. Don&apos;t let your cart
        stay single forever — go find it some company! 😄
      </p>
      <Link href="/shop">
        <Button>
          <ArrowLeft className="size-c-5" />
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
