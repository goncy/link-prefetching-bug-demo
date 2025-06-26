export default async function RafflePage({ searchParams }) {
  const { id } = await searchParams;

  return <div>Raffle {id || 'new'}
    <form>
      <input defaultValue={id} type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  </div>;
}