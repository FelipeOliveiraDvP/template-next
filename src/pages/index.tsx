export default function Home() {
  return (
    <div>
      <h1>Welcome to Next JS Template</h1>
      <p>This template is ready to deploy on Azure pipelines</p>
      <code>NEXT_PUBLIC_API_URL={process.env.NEXT_PUBLIC_API_URL}</code>
      <br />
      <code>NEXT_PUBLIC_DEFAULT_SRC={process.env.NEXT_PUBLIC_DEFAULT_SRC}</code>
      <br />
      <code>NEXT_PUBLIC_IMAGE_SRC={process.env.NEXT_PUBLIC_IMAGE_SRC}</code>
    </div>
  );
}
