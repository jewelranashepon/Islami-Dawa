import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new Response("All fields are required", { status: 400 });
    }

    // Find the user by email and role
    const newUser = await prisma.newUser.findFirst({
      where: { email, role },
    });
    console.log(newUser);
    if (!newUser || !(await bcrypt.compare(password, newUser.password))) {
      return new Response("Invalid credentials", { status: 401 });
    }

    // Successful login: return user info without password
    return new Response(
      JSON.stringify({
        message: `Welcome ${role}!`,
        newUser: { email: newUser.email, role: newUser.role },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response("An error occurred", { status: 500 });
  }
}

export async function GET(req) {
  try {
    // Fetch all users (or customize for specific user)
    const users = await prisma.newUser.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("Error fetching users", { status: 500 });
  }
}
