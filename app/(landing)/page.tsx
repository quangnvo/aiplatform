import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Landing Page (unprotected)
      <div>

        {/* Button sign in */}
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>

        {/* Button sign up */}
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}
