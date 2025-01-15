"use client";
import React from "react";
import { Button } from "../ui/Button";
import { FiShare2 } from "react-icons/fi";
import { toast } from "sonner";
import { Event } from "./EventDetails";

type Props = {
  eventData: Event;
};

const ShareButton = (props: Props) => {
  const { eventData } = props;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: eventData.title,
          text: eventData.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Lien copié!", {
          description:
            "Le lien de l'événement a été copié dans votre presse-papier.",
        });
      }
    } catch {
      toast.error("Erreur", {
        description: "Impossible de partager l'événement.",
      });
    }
  };

  return (
    <Button
      variant="outline"
      fullWidth
      size="lg"
      icon={<FiShare2 className="w-4 h-4" />}
      className="bg-gray-50 hover:bg-gray-100"
      onClick={handleShare}
    >
      Partager
    </Button>
  );
};

export default ShareButton;
