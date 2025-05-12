"use client";

import { useState } from "react";
import { createRsvp } from "./rsvp-form.server";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export default function RSVPForm() {
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
      setShowDialog(true); // Show thank you modal
    } catch (err) {
      console.error(err);
      alert("RSVP failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-2xl md:text-4xl italic underline text-gray-900 text-center mb-2">
        RSVP
      </div>
      <Card>
        <CardHeader />
        <CardContent>
          <form onSubmit={handleForm} className="space-y-1">
            <div>
              <Label
                htmlFor="name"
                className="text-base font-mono text-gray-900 mb-2"
              >
                Nama Anda
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. Amirul Irfan"
                required
                value={formValues.name}
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div>
              <Label
                htmlFor="speech"
                className="text-base font-mono text-gray-900 mb-2"
              >
                Ucapan
              </Label>
              <Textarea
                id="speech"
                name="speech"
                placeholder="Ucapan..."
                rows={4}
                className="min-h-[120px]"
                value={formValues.speech}
                required
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, speech: e.target.value }))
                }
              />
            </div>

            <div className="flex items-center space-x-2 my-6">
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
              <Label
                htmlFor="isAttend"
                className="text-base font-mono text-gray-900"
              >
                Saya Hadir
              </Label>
            </div>

            {formValues.isAttend && (
              <div>
                <Label
                  htmlFor="total_person"
                  className="text-base font-mono text-gray-900 mb-2"
                >
                  Bilangan rombongan (termasuk anda)
                </Label>
                <Select
                  name="total_person"
                  value={formValues.total_person}
                  onValueChange={(val) =>
                    setFormValues((prev) => ({ ...prev, total_person: val }))
                  }
                  required
                >
                  <SelectTrigger id="total_person">
                    <SelectValue placeholder="Sila pilih bilangan rombongan" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-black">
                    {Array.from({ length: 3 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button
              type="submit"
              disabled={
                loading || (formValues.isAttend && !formValues.total_person)
              }
              className="w-full bg-pink-500 text-white hover:bg-pink-600 my-2"
            >
              {loading ? "Sedang Menghantar..." : "Hantar RSVP"}
            </Button>
          </form>
        </CardContent>
        <CardFooter />
      </Card>

      {/* 🎉 Thank You Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="text-center">
          <DialogHeader className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-12 h-12 text-green-600 bg-green-100 rounded-full p-1" />
            <DialogTitle className="text-xl">Terima kasih</DialogTitle>
            <DialogDescription className="text-base text-gray-700">
              Terima kasih atas respon anda
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-center">
            <DialogClose asChild>
              <Button className="bg-pink-500 text-white">Tutup</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
