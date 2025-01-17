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
import { sendRegistrationEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { FancyButton } from "../ui/FancyButton";

interface Props {
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  className?: string;
  textClassName?: string;
}

const schema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  country: z.string().min(2, "Veuillez sélectionner un pays"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
});

type FormData = z.infer<typeof schema>;

export function RegistrationFormDialog({
  eventTitle,
  eventDate,
  eventTime,
  eventLocation,
  className,
  textClassName,
}: Props) {
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
      const result = await sendRegistrationEmail({
        ...data,
        country: countries[data.country as keyof typeof countries],
        eventTitle,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
      });

      if (result.success) {
        toast.success("Inscription réussie!");
        reset();
        setIsOpen(false);
      } else {
        toast.error("Échec de l'inscription", {
          description:
            "Une erreur est survenue lors de l'envoi du mail de confirmation. Veuillez réessayer.",
        });
      }
    } catch (error) {
      toast.error("Erreur", {
        description:
          "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
      });
      console.error("Error submitting form:", error);
    }
  };

  const countryOptions = Object.entries(countries)
    .map(([code, name]) => ({
      value: code,
      label: name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <>
      <FancyButton
        variant="primary"
        fullWidth
        size="lg"
        onClick={() => setIsOpen(true)}
        className={className}
        textClassName={textClassName}
      >
        Enregistrez- vous
      </FancyButton>

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
