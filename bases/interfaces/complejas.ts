(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Emmanuel",
    age: 34,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
  };

  const client2: Client = {
    name: "Damaris",
    age: 37,
    address: {
      id: 126,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
  };
})();
