"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Wrong discord",
    })
    .max(32, {
      message: "Wrong discord",
    })
    .startsWith("@", {
      message: "Wrong discord",
    }),
  walletAddress: z.string(),
  //         .startsWith("1X", {
  //     message: "Wrong address",
  //   }),
});

const MintForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      walletAddress: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="flex">
                <FormLabel>
                  <div className="w-12 h-12 lg:w-[64px] lg:h-[64px] p-3 lg:p-5 bg-[#1E1E1E] rounded-tl-lg rounded-bl-lg justify-center items-center">
                    <svg className="w-6 h-6 fill-[#5A65F2]">
                      <use xlinkHref="/icons/sprite.svg#icon-discord"></use>
                    </svg>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="@USERNAME"
                    {...field}
                    className={cn(
                      "",
                      form.formState.errors.walletAddress && "border-accent"
                    )}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="walletAddress"
          render={({ field }) => (
            <FormItem>
              <div className="flex">
                <FormLabel>
                  <div className="w-12 h-12 lg:w-[64px] lg:h-[64px] p-3 lg:p-5 bg-[#1E1E1E] rounded-tl-lg rounded-bl-lg justify-center items-center">
                    <svg className="w-6 h-6">
                      <use xlinkHref="/icons/sprite.svg#icon-metamask"></use>
                    </svg>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="WALLET ADDRESS"
                    {...field}
                    className={cn(
                      "",
                      form.formState.errors.walletAddress && "border-accent"
                    )}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="w-full h-[41px] text-primary pt-2.5 pb-3 bg-accent rounded-lg justify-center items-center uppercase"
        >
          Mint
        </button>
      </form>
    </Form>
  );
};
export default MintForm;
