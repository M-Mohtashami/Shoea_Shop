import { El } from "@/library";
import { pageHeader, navbar, cart, colorStyle } from "@/layout";
import { svgs } from "@/svgs";
import { Button, deleteModal } from "@/components";
import { getData, update } from "@/api";
import Cookies from "js-cookie";
import { Routes } from "@/Routes";

export const orderRender = (status = "active") => {
  getData(`/users?_email=${Cookies.get("shoea")}`).then((response) => {
    const container = document.getElementById("order-section");
    container.innerHTML = "";
    // create a card of product in cart
    let orders = response.data[0].orders;
    orders.forEach((order) => {
      if (order.status === status) {
        order.cart.map((item) => {
          const elem = El({
            element: "div",
            className:
              "max-h-sm w-full flex items-center gap-2 p-4 shadow-lg rounded-2xl",
            children: [
              El({
                element: "img",
                className: "rounded-lg w-28 aspect-square	",
                src: item.img,
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
                          "w-52 text-shoea text-xl font-bold whitespace-nowrap truncate",
                        innerText: item.name,
                      }),
                    ],
                  }),
                  //details of selected product
                  El({
                    element: "div",
                    className: "w-full flex items-center justify-start gap-1 ",
                    children: [
                      El({
                        element: "div",
                        className: `w-5 h-5 ${
                          colorStyle[item.color].bg
                        } flex items-center justify-center rounded-full cursor-pointer`,
                      }),
                      El({
                        element: "span",
                        className: `text-shoea text-md font-semibold`,
                        innerText: item.color,
                      }),
                      El({
                        element: "div",
                        className: `w-1 h-5 border-r-2 border-gray-500`,
                      }),
                      El({
                        element: "span",
                        className: `text-shoea text-md font-semibold`,
                        innerText: "size=",
                      }),
                      El({
                        element: "span",
                        className: `text-shoea text-md font-semibold`,
                        innerText: item.size,
                      }),
                      El({
                        element: "div",
                        className: `w-1 h-5 border-r-2 border-gray-500`,
                      }),
                      El({
                        element: "span",
                        className: `text-shoea text-md font-semibold`,
                        innerText: "Qty=",
                      }),
                      El({
                        element: "span",
                        className: `text-shoea text-md font-semibold`,
                        innerText: item.quantity,
                      }),
                    ],
                  }),
                  //product total price and quantity handel button
                  El({
                    element: "div",
                    className: "w-full flex items-center justify-between gap-6",
                    children: [
                      El({
                        element: "span",
                        id: `item-price-${item.id}`,
                        className: "text-shoea text-lg font-bold",
                        innerText: `$ ${item.totalPrice}`,
                      }),
                      El({
                        element: "div",
                        className:
                          "bg-black px-4 py-2 text-white rounded-full flex items-center justify-center whitespace-nowrap",
                        children: [
                          El({
                            element: "span",
                            className: "font-bold",
                            innerHTML:
                              status === "active" ? "Track Order" : "Buy Again",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
          container.appendChild(elem);
        });
      }
    });
  });
};

export const Orders = () => {
  setTimeout(() => {
    const active = document.getElementById("active");
    // const compelited = document.getElementById('compelited');
    active.classList.add(
      "border-b",
      "border-shoea",
      "text-shoea",
      "font-bold",
      "shadow-md"
    );
    orderRender();
  }, 0);
  return El({
    element: "div",
    className: "h-full flex flex-col items-center justify-start",
    children: [
      pageHeader({
        title: "My Orders",
        icons: [svgs.SearchIcon, svgs.More],
      }),
      // orderHeader(),
      El({
        element: "div",
        className:
          "w-full px-4 pb-4 mt-4 text-xl flex items-center justify-center gap-4",
        children: [
          El({
            element: "div",
            id: "active",
            onclick: (e) => {
              const active = document.getElementById("active");
              const compelited = document.getElementById("compelited");
              compelited.classList.remove(
                "border-b",
                "border-shoea",
                "text-shoea",
                "font-bold",
                "shadow-md"
              );
              active.classList.add(
                "border-b",
                "border-shoea",
                "text-shoea",
                "font-bold",
                "shadow-md"
              );
              orderRender("active");
            },
            className:
              "w-1/2 p-2 text-gray-500 flex items-center justify-center",
            children: [
              El({
                element: "span",
                innerText: "Active",
              }),
            ],
          }),
          El({
            element: "div",
            id: "compelited",
            onclick: (e) => {
              const active = document.getElementById("active");
              const compelited = document.getElementById("compelited");
              compelited.classList.add(
                "border-b",
                "border-shoea",
                "text-shoea",
                "font-bold",
                "shadow-md"
              );
              active.classList.remove(
                "border-b",
                "border-shoea",
                "text-shoea",
                "font-bold",
                "shadow-md"
              );
              orderRender("compelited");
            },
            className:
              "w-1/2 p-2 text-gray-500 flex items-center justify-center",
            children: [
              El({
                element: "span",
                innerText: "Compelete",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        id: "order-section",
        className:
          "w-full px-3 py-4 pb-24 flex flex-col items-center justify-start gap-6 overflow-y-scroll",
      }),
      navbar("orders"),
    ],
  });
};
