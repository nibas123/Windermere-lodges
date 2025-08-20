"use client";

import { doSocialLogin } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function SocialLogin() {
  return (
    <div>
      <form action={doSocialLogin} className="grid gap-4">
        <Button variant="outline" type="submit" name="action" value={"google"}>
          <Icons.google className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
        {/* <Button variant="outline" type="submit" name="action" value={"facebook"}>
          <Icons.facebook className="mr-2 h-4 w-4" />
          Continue with Facebook
        </Button> */}
      </form>
    </div>
  );
}
