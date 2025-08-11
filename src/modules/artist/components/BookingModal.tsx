"use client";
import { useState } from "react";
import { X, Calendar, MapPin, Clock, DollarSign } from "lucide-react";
import { useForm } from "react-hook-form";
import { Artist, BookingRequest } from "../model";
import { useArtistsContext } from "../context";

interface BookingModalProps {
  artist: Artist;
  isOpen: boolean;
  onClose: () => void;
}

type BookingFormData = Omit<BookingRequest, "artistId">;

export const BookingModal = ({
  artist,
  isOpen,
  onClose,
}: BookingModalProps) => {
  const { submitBookingRequest, isBookingLoading } = useArtistsContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  if (!isOpen) return null;

  const onSubmit = async (data: BookingFormData) => {
    const bookingData: BookingRequest = {
      ...data,
      artistId: artist.id,
    };

    const success = await submitBookingRequest(bookingData);
    if (success) {
      reset();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-4">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Book {artist.name}
              </h2>
              <p className="text-gray-600 text-sm">
                Submit your booking request
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Client Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  {...register("clientName", { required: "Name is required" })}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.clientName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.clientName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  {...register("clientEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.clientEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.clientEmail.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                {...register("clientPhone", {
                  required: "Phone number is required",
                })}
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
              {errors.clientPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.clientPhone.message}
                </p>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gold-500" />
              Event Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type *
                </label>
                <select
                  {...register("eventType", {
                    required: "Event type is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="">Select event type</option>
                  <option value="concert">Concert</option>
                  <option value="private_event">Private Event</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="festival">Festival</option>
                  <option value="other">Other</option>
                </select>
                {errors.eventType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.eventType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Date *
                </label>
                <input
                  {...register("eventDate", {
                    required: "Event date is required",
                  })}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                {errors.eventDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.eventDate.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Event Location *
              </label>
              <input
                {...register("eventLocation", {
                  required: "Event location is required",
                })}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="City, State/Country or Venue Name"
              />
              {errors.eventLocation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.eventLocation.message}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Duration (hours) *
                </label>
                <input
                  {...register("duration", {
                    required: "Duration is required",
                    min: { value: 1, message: "Minimum 1 hour" },
                    max: { value: 12, message: "Maximum 12 hours" },
                  })}
                  type="number"
                  min="1"
                  max="12"
                  step="0.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="2.5"
                />
                {errors.duration && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.duration.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Budget (USD) *
                </label>
                <input
                  {...register("budget", {
                    required: "Budget is required",
                    min: { value: 1000, message: "Minimum budget is $1,000" },
                  })}
                  type="number"
                  min="1000"
                  step="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="10000"
                />
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Additional Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requirements
              </label>
              <textarea
                {...register("additionalRequirements")}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                placeholder="Sound equipment, lighting, backstage requirements, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                placeholder="Tell us more about your event..."
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              We'll respond within 24-48 hours
            </p>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isBookingLoading}
                className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isBookingLoading ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
