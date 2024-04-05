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
import { formSchema } from "@/schemas";
import { useState } from "react";

const MintForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState<"mint" | "minted" | "error">(
    "mint"
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      walletAddress: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    form.reset();
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setButtonText("minted");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);

      setButtonText("error");
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setButtonText("mint");
      }, 2000);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 lg:space-y-6 w-full md:w-[248px] lg:w-[397px]"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative">
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
                      form.formState.errors.username &&
                        "border-accent text-accent"
                    )}
                  />
                </FormControl>
              </div>
              <FormMessage className="absolute right-0 bottom-[-14px] lg:bottom-[-16px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="walletAddress"
          render={({ field }) => (
            <FormItem className="relative">
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
                      form.formState.errors.walletAddress &&
                        "border-accent text-accent"
                    )}
                  />
                </FormControl>
              </div>
              <FormMessage className="absolute right-0 bottom-[-14px] lg:bottom-[-16px]" />
            </FormItem>
          )}
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className={cn(
            "w-full h-[41px] lg:h-[70px] text-primary lg:text-[28px] pt-2.5 pb-3 leading-[19px] bg-accent rounded-lg lg:rounded-xl justify-center items-center uppercase hover:text-secondary focus:text-secondary transition-all duration-300",
            isSubmitting && "bg-[#A53041]"
          )}
        >
          {buttonText}
        </button>
      </form>
    </Form>
  );
};
export default MintForm;
