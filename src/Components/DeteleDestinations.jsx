"use client";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeteleDestinations({ details }) {
  const { country, _id } = details;
  const router = useRouter();

  const handleDeleteButton = async (_id) => {
    const uri = process.env.NEXT_PUBLIC_BACKEND_URI;
    const res = await fetch(`${uri}/tours/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(data);
    if (res) {
      router.push("/");
    }
    return data;
  };
  return (
    <AlertDialog>
      <Button variant="danger">Delete Destination</Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>
                Permanently delete <strong>{country}</strong> Destination?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. All your data, settings, and
                content will be permanently removed from our servers. The
                dramatic red backdrop emphasizes the severity and
                irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Destinations
              </Button>
              <Button
                onClick={() => handleDeleteButton(_id)}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Delete Destinations
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
