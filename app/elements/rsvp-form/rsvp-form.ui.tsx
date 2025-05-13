"use client";

import { useState } from "react";
import { createRsvp } from "./rsvp-form.server";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export function RSVPDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    speech: "",
    isAttend: false,
    total_person: "",
  });

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      setLoading(true);
      await createRsvp(formData);
      setFormValues({
        name: "",
        speech: "",
        isAttend: false,
        total_person: "",
      });
      setShowDialog(true);
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      alert("RSVP gagal dihantar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="p-4">
          <DrawerHeader>
            <DrawerTitle className="text-center text-lg">
              Isi Maklumat Kehadiran
            </DrawerTitle>
            <DrawerDescription className="text-center text-sm text-gray-600">
              Kami hargai kehadiran dan ucapan anda 🙏
            </DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleForm} className="space-y-4 p-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Nama Anda</Label>
              <Input
                id="name"
                name="name"
                placeholder="Contoh: Amirul Irfan"
                required
                value={formValues.name}
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="speech">Ucapan</Label>
              <Textarea
                id="speech"
                name="speech"
                placeholder="Ucapan anda..."
                rows={3}
                value={formValues.speech}
                required
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, speech: e.target.value }))
                }
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="isAttend"
                name="isAttend"
                checked={formValues.isAttend}
                onCheckedChange={(checked: boolean) => {
                  setFormValues((prev) => ({
                    ...prev,
                    isAttend: checked,
                    total_person: checked ? prev.total_person : "",
                  }));
                }}
              />
              <Label htmlFor="isAttend">Saya Hadir</Label>
            </div>

            {formValues.isAttend && (
              <div className="space-y-1.5">
                <Label htmlFor="total_person">Bilangan Rombongan</Label>
                <Select
                  name="total_person"
                  value={formValues.total_person}
                  onValueChange={(val) =>
                    setFormValues((prev) => ({ ...prev, total_person: val }))
                  }
                  required
                >
                  <SelectTrigger id="total_person">
                    <SelectValue placeholder="Pilih bilangan rombongan" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 5 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2 pt-2">
              <Button
                type="submit"
                disabled={
                  loading || (formValues.isAttend && !formValues.total_person)
                }
                className="w-full bg-pink-500 text-white hover:bg-pink-600"
              >
                {loading ? "Menghantar..." : "Hantar RSVP"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => onOpenChange(false)}
              >
                Batal
              </Button>
            </div>
          </form>
        </DrawerContent>
      </Drawer>

      {/* Thank You Modal */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="text-center">
          <DialogHeader className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-12 h-12 text-green-600 bg-green-100 rounded-full p-1" />
            <DialogTitle className="text-xl">Terima kasih!</DialogTitle>
            <DialogDescription>Respon anda telah diterima</DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-center">
            <DialogClose asChild>
              <Button className="bg-pink-500 text-white">Tutup</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
