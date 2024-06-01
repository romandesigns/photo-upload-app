import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="container flex justify-center items-center flex-col gap-10 w-2/5">
        <div className="flex flex-col border-base-300 items-center justify-center">
          <h2 className="text-3xl font-bold">Welcome to photo upload</h2>
          <small>Sign in to upload and save your favorite photos.</small>
        </div>
        <AuthForm />
      </div>
    </section>
  );
}
