import api from "./api";

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export async function searchUsers(params: any) {
  const res = await api.get("/search/users", {
    params: params,
  });

  try {
    if (res.status === 200) {
      const users: User[] = [];

      res.data.items.forEach(async (user: User) => {
        const res = await api.get(`/users/${user.login}`);

        if (res.status === 200) {
          const { name, bio, avatar_url, login } = res.data;

          users.push({
            name: name,
            login: login,
            avatar_url: avatar_url,
            bio: bio,
          });
        }
      });

      return users;
    }
  } catch (e) {
    console.log(e);
  }
}
