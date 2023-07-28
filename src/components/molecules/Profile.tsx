"use client"; // This is a client component

import { Hi_Melody } from "next/font/google";
import React from "react";
import ScrollLayout from "../atoms/ScrollLayout";

const Profile = () => {
  return (
    <ScrollLayout classList="z-10 bg-[--background-color] h-[150vh] grid place-items-center">
      PROFILE
    </ScrollLayout>
  );
};

export default Profile;
