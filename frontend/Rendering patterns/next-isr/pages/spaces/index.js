

const Spaces = ({name,description}) => {
  return (
    <div>
      This is space page {name} {description}
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch("https://api.publicapis.org/random")
  const json = await res.json();
  return {
      props:{
        name: json.entries[0].API,
        description: json.entries[0].Description,
      },
      revalidate: 10,  
  };
}

export default Spaces