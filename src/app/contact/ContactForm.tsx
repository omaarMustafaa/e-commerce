"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 h-auto rounded-xl border-gray-200 focus-visible:ring-2 focus-visible:ring-main-color/20 focus-visible:border-main-color focus-visible:ring-offset-0 transition-all shadow-none"
          />
        </div>

        {/* Email Address */}
        <div>
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 h-auto rounded-xl border-gray-200 focus-visible:ring-2 focus-visible:ring-main-color/20 focus-visible:border-main-color focus-visible:ring-offset-0 transition-all shadow-none"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
  <Label
    htmlFor="subject"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Subject
  </Label>
  <Select name="subject">
    <SelectTrigger className="w-full px-4 py-3 h-auto min-h-11.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-main-color/20 focus:border-main-color focus-visible:ring-2 focus-visible:ring-main-color/20 focus-visible:ring-offset-0 transition-all shadow-none [&>span]:line-clamp-1">
      <SelectValue placeholder="Select a subject" />
    </SelectTrigger>
    <SelectContent className="rounded-xl">
      <SelectItem value="General Inquiry">General Inquiry</SelectItem>
      <SelectItem value="Order Support">Order Support</SelectItem>
      <SelectItem value="Shipping Question">Shipping Question</SelectItem>
      <SelectItem value="Returns & Refunds">Returns & Refunds</SelectItem>
      <SelectItem value="Product Information">Product Information</SelectItem>
      <SelectItem value="Feedback & Suggestions">Feedback & Suggestions</SelectItem>
      <SelectItem value="Other">Other</SelectItem>
    </SelectContent>
  </Select>
</div>

      {/* Message */}
      <div>
        <Label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help you?"
          className="w-full h-37.5 px-4 py-3 rounded-xl border-gray-200 focus-visible:ring-2 focus-visible:ring-main-color/20 focus-visible:border-main-cring-main-color focus-visible:ring-offset-0 transition-all resize-none shadow-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="button"
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 h-auto rounded-xl bg-main-color text-white font-semibold hover:bg-main-color-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-main-cbg-main-color/20"
      >
        <svg
          data-prefix="fas"
          data-icon="paper-plane"
          className="w-4 h-4"
          role="img"
          viewBox="0 0 576 512"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"
          ></path>
        </svg>
        Send Message
      </Button>
    </form>
  );
}