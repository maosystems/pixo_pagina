
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/booking/BookingForm";

const Book = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 py-10">
        <div className="max-w-[1014px] mx-auto px-4">
          <h1 className="text-4xl font-bold text-[rgba(42,42,42,1)]">
            Agenda tu servicio
          </h1>
          <p className="mt-4 text-lg text-[rgba(42,42,42,1)]">
            Completa la información necesaria para agendar tu servicio con{" "}
            <span className="font-bold text-[rgba(51,222,179,1)]">PIXO spa</span>
          </p>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
