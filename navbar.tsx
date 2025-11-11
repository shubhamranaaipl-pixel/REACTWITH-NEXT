"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import style from "@/component/Navbar/navbars.module.scss";
import { RouteConstant } from "@/constant/routeconstant";
import { useTranslations } from "next-intl";
import { TRANSLATION } from "@/constant/translationConstant";


export default function Navbar() {
  const headertranslation = useTranslations(TRANSLATION.HEADER);
  const [open, setOpen] = useState(false);

  const lidata = [
    {
      id: 1,
      name: headertranslation(TRANSLATION.HOME),
      route: RouteConstant.home,
    },
    {
      id: 2,
      name: headertranslation(TRANSLATION.CONTACT),
      route: RouteConstant.contact,
    },
    {
      id: 3,
      name: headertranslation(TRANSLATION.CART),
      route: RouteConstant.cart,
    },
  ];

  return (
    <>
      <div onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</div>

      {open && (
        <>
          <header className={style.header_container}> 
            <div onClick={() => setOpen(!open)} className={style.header_delete}>
              {open ? <X /> : <Menu />}
            </div>
            <div className={style.header_container_nav}>
              {lidata.map((item) => (
                <ul key={item.id} className={style.header_container_nav_lists}>
                  <Link href={item.route} className={style.header_container_nav_lists_links}>
                    <li onClick={() => setOpen(false)}>{item.name}</li>
                  </Link>
                </ul>
              ))}
            </div>
          </header>
        </>
      )}
    </>
  );
}
