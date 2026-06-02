export const getApiActions = async () => {
  const baseUri =
    process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:8000";
  try {
    const res = await fetch(`${baseUri}/tours`);
    if (!res.ok) throw new Error(`Failed to fetch tours: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
};

// handle destination added actions form submit data function
export const handleSubmitDestination = async (e) => {
  e.preventDefault();
  const uri =
    process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:8000/tours";

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  // console.log(data);
  const res = await fetch(`${uri}/tours`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
};

// get details of destination page
export const getDetailsDestination = async (id) => {
  const uri =
    process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:8000/tours";
  const res = await fetch(`${uri}/tours/${id}`);
  const data = res.json();
  return data;
};

// handle destination edit data
export const handleEditDestination = async (e, _id) => {
  e.preventDefault();
  const uri =
    process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:8000/tours";

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const res = await fetch(`${uri}/tours/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  // console.log(result);
  // console.log(data);
};
