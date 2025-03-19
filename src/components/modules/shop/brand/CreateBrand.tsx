"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";
import { DialogTitle } from "@radix-ui/react-dialog";
import ImagePreviewer from "@/components/ui/core/ImagePreviewer";
import NMImageUploader from "@/components/ui/core";
import { createBrand } from "@/services/Shop/brand";

export const CreateBrandModal = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  
    const form = useForm();
    const {
      formState: { isSubmitting },
    } = form;
  
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      try {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("logo", imageFiles[0] as File);
  
        const res = await createBrand(formData);

        console.log(res);
  
        if (res?.success) {
          toast.success(res?.message);
        } else {
          toast.error(res?.message);
        }
      } catch (err: any) {
        console.error(err);
      }
    };
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Brand</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Product Brand</DialogTitle>
          </DialogHeader>
  
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between mt-5">
                
                {imagePreview.length > 0 ? (
                  <ImagePreviewer
                    setImageFiles={setImageFiles}
                    imagePreview={imagePreview}
                    setImagePreview={setImagePreview}
                    className="mt-8"
                  />
                ) : (
                  <div className="mt-8">
                    <NMImageUploader
                      setImageFiles={setImageFiles}
                      setImagePreview={setImagePreview}
                      label="Upload Icon"
                    />
                  </div>
                )}
              </div>
  
              <Button type="submit" className="mt-5 w-full">
                {isSubmitting ? "Creating...." : "Create"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  };
