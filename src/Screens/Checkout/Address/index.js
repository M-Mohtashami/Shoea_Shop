import { Routes } from "@/Routes";
import { Button } from "@/components";
import { El } from "@/library";
import { svgs } from "@/svgs";

export let finallAddress = {
  name: "Home",
  address: "full address of home",
};
let selectedAddress = finallAddress;

const address = [
  {
    name: "Home",
    address: "full address of home",
  },
  {
    name: "Office",
    address: "full address of Office",
  },
  {
    name: "Apartment",
    address: "full address of Apartment",
  },
  {
    name: "Parent's House",
    address: "full address of Parent's House",
  },
];

export const Address = () => {
  return El({
    element: "div",
    className:
      "relative px-4 overflow-y-scroll pb-16 h-full flex flex-col items-center justify-start",
    children: [
      // header section
      El({
        element: "div",
        className: "w-full p-4 flex items-center justify-between",
        children: [
          El({
            element: "div",
            className: "flex items-center justify-center gap-4",
            children: [
              El({
                element: "div",
                className: "",
                onclick: (e) => {
                  Routes().navigate("/checkout");
                },
                children: [
                  El({
                    element: "span",
                    className: "w-10 h-10",
                    innerHTML: svgs.Back,
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex flex-col items-start justify-between",
                children: [
                  El({
                    element: "span",
                    className: "text-[#152536] text-xl font-bold ",
                    innerText: "Shipping Address",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      // Shipping address
      El({
        element: "div",
        className: "w-full py-4 flex flex-col items-start justify-start gap-6",
        children: [
          //Shipping Address section
          ...address.map((addr, index) => {
            return El({
              element: "label",
              for: "address",
              className: "w-full",
              children: [
                El({
                  element: "div",
                  className:
                    "max-h-sm w-full flex items-center gap-4 p-4 shadow-lg rounded-2xl",
                  children: [
                    //location icon
                    El({
                      element: "span",
                      className:
                        "p-2 rounded-full border-8 border-gray-300 bg-black [&_path]:fill-white flex items-center justify-center",
                      innerHTML: svgs.Location,
                    }),
                    El({
                      element: "div",
                      className:
                        "w-full flex flex-col gap-2 items-start justify-between ",
                      children: [
                        // title of selected product
                        El({
                          element: "div",
                          className: "w-full flex items-center justify-between",
                          children: [
                            El({
                              element: "span",
                              className:
                                "w-32 text-shoea text-xl font-bold whitespace-nowrap truncate",
                              innerText: addr.name,
                            }),
                            El({
                              element: "input",
                              className:
                                "p-2.5 text-black bg-gray-100 focus:bg-black focus:ring-black focus:ring-offset-white  focus:text-black",
                              name: "address",
                              checked: index === 0 ? true : false,
                              type: "radio",
                              onchange: (e) => {
                                e.target.checked === true
                                  ? (selectedAddress = addr)
                                  : null;
                                console.log(selectedAddress);
                              },
                            }),
                          ],
                        }),
                        //details of selected Address
                        El({
                          element: "div",
                          className:
                            "w-full flex items-center justify-start gap-2 ",
                          children: [
                            El({
                              element: "p",
                              className: ``,
                              innerText: addr.address,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        ],
      }),
      Button({
        child: "Add New Address",
        variant: "cancel",
        classes:
          "font-bold w-full mt-8 flex flex-row-reverse items-center justify-center gap-2",
        eventListener: [
          {
            event: "click",
            callback: (e) => {},
          },
        ],
      }),
      // footer
      El({
        element: "div",
        className:
          "fixed bottom-0 w-full p-6 h-28 flex items-start justify-between bg-white shadow-2xl border-2 rounded-t-3xl",
        children: [
          Button({
            child: "Apply",
            variant: "cart",
            classes:
              "font-bold w-full flex flex-row-reverse items-center justify-center gap-2",
            eventListener: [
              {
                event: "click",
                callback: () => {
                  finallAddress = selectedAddress;
                  console.log(finallAddress);
                  Routes().navigate("/checkout");
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};
