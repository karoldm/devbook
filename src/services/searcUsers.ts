import { api } from "./api";

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export async function searchUsers(params: any) {
  try {
    const res = await api.get("/search/users", {
      params: params,
    });
    if (res.status === 200) {
      const users: User[] = [];

      for (const user of res.data.items) {
        const userRes = await api.get(`/users/${user.login}`);

        if (userRes.status === 200) {
          const { name, bio, avatar_url, login } = userRes.data;

          users.push({
            name: name,
            login: login,
            avatar_url: avatar_url,
            bio: bio,
          });
        }
      }

      return users;
    }
  } catch (e) {
    console.log(e);
  }
}
