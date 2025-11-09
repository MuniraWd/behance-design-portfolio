import SecondryButton from './SecondaryButton';
import Search from './Search';

const SeccondaryMenu = () => {
  return (
    <section className='mt-6 pb-6'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-[1fr_auto]'>
          <Search />
          <div className="flex gap-2 px-[18px] border border border-gray-200 rounded-r-full">
            <SecondryButton active>Projects</SecondryButton>
            <SecondryButton>Images</SecondryButton>
            <SecondryButton>Prototypes</SecondryButton>
            <SecondryButton>Streams</SecondryButton>
            <SecondryButton>People</SecondryButton>
            <SecondryButton>Moodboards</SecondryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeccondaryMenu;