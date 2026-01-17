// Handling dynamic redirects

export async function getStaticProps() {
  // Your dynamic redirect logic here

  return {
    redirect: {
      destination: '/new-path', // Change this to where you want to redirect
      permanent: false,
    },
  };
}

export default function StaticPage() {
  // Content of your static page
  return <div>Welcome to the static page!</div>;
}
