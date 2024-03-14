import {Partners} from "@/components/parts";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {contactSchema} from "@/lib/validation.ts";
import {z} from "zod";
import axios from "@/api/axios";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {toast} from "sonner";

const Contact = () => {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            title: "",
            phoneNumber: "+998",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof contactSchema>) {
        try {
            const { data } = await axios.post("/api/Contact/Create", values);
            if (data) {
                toast.success("Murojaatingiz qabul qilindi");
                form.reset()
            }
            else {
                toast.error("Murojaatingiz qabul qilinmadi");
            }
        } catch (error) {
            toast.error("Murojaatingiz qabul qilinmadi");
        }
    }

    const { isSubmitting } = form.formState;

  return (
      <div className="flex flex-col gap-y-8">
        <div className="py-8 bg-lightblue">
          <div className="flex flex-col gap-y-8 container">
            <h1 className="text-5xl font-semibold text-darkindigo">Biz bilan bog'laning</h1>
              <div className="bg-white flex items-center justify-center rounded-xl md:py-16 py-0">
                  <Form {...form}>
                      <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="px-[48px] pt-[48px] pb-[15px] flex flex-col justify-center items-center gap-[30px] border border-solid border-grey-400 rounded-2xl md:w-[640px] w-full"
                      >
                          <FormField
                              name="title"
                              control={form.control}
                              render={({ field }) => (
                                  <FormItem className="w-full">
                                      <FormControl>
                                          <Input
                                              type="text"
                                              placeholder="Sarlavha"
                                              {...field}
                                              className="w-full"
                                          />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <FormField
                              name="phoneNumber"
                              control={form.control}
                              render={({ field }) => (
                                  <FormItem className="w-full">
                                      <FormControl>
                                          <Input
                                              type="tel"
                                              placeholder="Tel raqam"
                                              {...field}
                                              className="w-full"
                                              maxLength={13}
                                          />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <FormField
                              name="message"
                              control={form.control}
                              render={({ field }) => (
                                  <FormItem className="w-full">
                                      <FormControl>
                                          <Textarea
                                              placeholder="Tavsif"
                                              className="w-full"
                                              {...field}
                                          />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="py-[12px] px-[120px] rounded-2xl text-xl font-medium leading-[100%]"
                          >Yuborish</Button>
                      </form>
                  </Form>
              </div>
          </div>
        </div>
        <div className={"mb-8"}>
          <Partners/>
        </div>
      </div>
  )
}

export default Contact