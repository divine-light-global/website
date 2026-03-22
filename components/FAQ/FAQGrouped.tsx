"use client";
import React, { useEffect, useState } from "react";

type QA = { id: number; q: string; a: string };
type Group = { id: string; title: string; items: QA[] };

export default function FAQGrouped({ groups }: { groups: Group[] }) {
  const [activeGroup, setActiveGroup] = useState<string>(groups[0]?.id || "");
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && groups.some((g) => g.id === hash)) {
        setActiveGroup(hash);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const currentGroup = groups.find((g) => g.id === activeGroup) || groups[0];

  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 lg:w-1/4">
        <div className="sticky top-18.5 rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
          <ul className="space-y-2">
            {groups.map((g) => (
              <li key={g.id}>
                <button
                  onClick={() => {
                    setActiveGroup(g.id);
                    setOpenId(null);
                    if (typeof window !== "undefined") {
                      history.replaceState(null, "", `#${g.id}`);
                    }
                  }}
                  className={`w-full text-left rounded-xs px-3 py-2 text-base dark:text-white hover:bg-stroke ${
                    activeGroup === g.id ? "bg-stroke font-semibold" : ""
                  }`}
                >
                  {g.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full px-4 lg:w-3/4">
        <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-13.75 lg:mb-5 lg:px-8 xl:p-13.75">
          <h1 className="mb-6">{currentGroup.title}</h1>

          <div className="rounded-lg bg-secondary shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
            {currentGroup.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="flex cursor-pointer items-center justify-between px-6 py-5 text-metatitle3 font-medium text-primary dark:text-white lg:px-9 lg:py-7.5"
                >
                  {item.q}

                  {openId === item.id ? (
                    <svg
                      width="18"
                      height="4"
                      viewBox="0 0 18 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
                <p
                  className={`border-t bg-white border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5 ${
                    openId === item.id ? "block" : "hidden"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
