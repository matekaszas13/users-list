type newUserDetails = {
  first_name: string;
  last_name: string;
  status: string;
};

export const datahandler = {
  async getUsers() {
    const users = await fetch(
      "https://assessment-users-backend.herokuapp.com/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await users.json();
  },
  async createNewUser(newUserData: newUserDetails) {
    await fetch("https://assessment-users-backend.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
  },
};
