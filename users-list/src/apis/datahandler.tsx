type newUserDetails = {
  first_name: string;
  last_name: string;
  status: string;
};

type userUpdateDetails = {
  first_name: string;
  last_name: string;
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
  async getUserById(id: string) {
    const result = await fetch(
      `https://assessment-users-backend.herokuapp.com/users/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await result.json();
  },
  async updateUserByItsId(id: string, userUpdateDetails: userUpdateDetails) {
    const result = await fetch(
        `https://assessment-users-backend.herokuapp.com/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userUpdateDetails),
      }
    )
  },
};
