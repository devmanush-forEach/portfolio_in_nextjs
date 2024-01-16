"use client"; // This is a client component

import { Hi_Melody } from "next/font/google";
import React from "react";
import ScrollLayout from "../atoms/ScrollLayout";
import { profile } from "@/shared/data";
import Image from "next/image";

const Profile = () => {
  return (
    <ScrollLayout
      id="profileSection"
      classList="z-10 pt-16 flex justify-center min-h-[100vh] "
    >
      <div className=" w-full  grid grid-cols-2 max-w-[62.5rem]">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[31.25rem] flex gap-4 flex-col ">
            <div>
              <h1 className="text-5xl font-bold">{profile.title}</h1>
              {profile.subTitle && <h2>{profile.subTitle}</h2>}
            </div>
            <h3 className="text-lg ">{profile.about}</h3>
          </div>
        </div>
        <div className="w-full grid place-items-center">
          <figure>
            <img
              className="aspect-square rounded-full"
              src="https://e0.pxfuel.com/wallpapers/932/376/desktop-wallpaper-stylish-boys-cool-d-profile-pics-for-facebook-whatsapp-pretty-boys.jpg"
              alt=""
              width={300}
              height={300}
            />
          </figure>
        </div>
      </div>
    </ScrollLayout>
  );
};

export default Profile;
