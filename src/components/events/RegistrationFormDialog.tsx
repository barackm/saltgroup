"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import "react-phone-input-2/lib/style.css";
import { countries } from "@/utils/countries";

type Props = {
  eventTitle: string;
};

const schema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  country: z.string().min(2, "Veuillez sélectionner un pays"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
});

type FormData = z.infer<typeof schema>;

export function RegistrationFormDialog({ eventTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your API
      console.log(data);
      reset(); // Reset form
      setIsOpen(false); // Close dialog
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Convert countries object to array of options
  const countryOptions = Object.entries(countries)
    .map(([code, name]) => ({
      value: code,
      label: name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically

  return (
    <>
      <Button
        variant="primary"
        fullWidth
        size="lg"
        onClick={() => setIsOpen(true)}
      >
        S&apos;inscrire
      </Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="md"
        title="Inscription à l'événement"
        description={eventTitle}
      >
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Prénom"
                placeholder="Votre prénom"
                error={errors.firstName?.message}
                {...register("firstName")}
                fullWidth
              />
              <Input
                label="Nom"
                placeholder="Votre nom"
                error={errors.lastName?.message}
                {...register("lastName")}
                fullWidth
              />
            </div>

            <Input
              type="email"
              label="Email"
              placeholder="votre@email.com"
              error={errors.email?.message}
              {...register("email")}
              fullWidth
            />

            <Input
              type="select"
              label="Pays"
              error={errors.country?.message}
              {...register("country")}
              fullWidth
              options={[
                { value: "", label: "Sélectionnez un pays" },
                ...countryOptions,
              ]}
            />

            <Input
              type="phone"
              label="Téléphone"
              error={errors.phone?.message}
              onPhoneChange={(phone) => setValue("phone", phone)}
              fullWidth
            />

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                Annuler
              </Button>
              <Button variant="primary" type="submit" isLoading={isSubmitting}>
                Confirmer
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
