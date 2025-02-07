export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    { name: "userId", title: "userId", type: "string", unique: true },
    { name: "email", title: "Email", type: "string", unique: true },
    { name: "name", title: "Name", type: "string" },
  ],
};
