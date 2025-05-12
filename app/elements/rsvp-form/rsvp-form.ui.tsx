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

export default function RSVPForm() {
  const [loading, setLoading] = useState(false);
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
      alert("RSVP saved successfully.");
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
            {/* Name Input */}
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

            {/* Speech Input */}
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
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, speech: e.target.value }))
                }
              />
            </div>

            {/* Attend Checkbox */}
            <div className="flex items-center space-x-2 my-6">
              <Checkbox
                id="isAttend"
                name="isAttend"
                checked={formValues.isAttend}
                onCheckedChange={(checked: boolean) => {
                  setFormValues((prev) => ({
                    ...prev,
                    isAttend: checked,
                    total_person: checked ? prev.total_person : "", // Reset total_person if not attending
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

            {/* Total Person Select (only shown if isAttend is true) */}
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

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading || (formValues.isAttend && !formValues.total_person)}
              className="w-full bg-pink-500 text-white hover:bg-pink-600 my-2"
            >
              {loading ? "Sedang Menghantar..." : "Hantar RSVP"}
            </Button>
          </form>
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  );
}
