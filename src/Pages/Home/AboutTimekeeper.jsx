import tiger from "../../assets/img/tiger.png";

const AboutTimekeeper = () => {
  return (
    <div className="max-h-full border">
      <div>
        <h1>The Art Gallery of San Francisco</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Row 1 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-blue-500 h-16 flex items-center justify-center text-white">
          The Art Gallery of San Francisco
        </div>

        {/* Row 2 */}
        <div className="bg-green-500 flex items-center justify-center text-white">
          <p>
            Welcome to the World’s Lead- ing Museum of Modern Art. It includes
            works of art created during the period stretching from about 1860 to
            the 1970s.
          </p>
        </div>
        <div className="bg-green-500 flex items-center justify-center text-white">
          <p>
            Man face fruit divided seasons herb from herb moveth whose. Dominion
            gathered winged morning, man won’t had fly beginning. Winged have
            saying behold morning greater void shall created whose blessed herb
            light fruitful open void without itself whales.Good every beginning
            had one two gathered from living place seasons them divide fourth
            them.
          </p>
        </div>
        <div className="bg-green-500 h-166 flex items-center justify-center text-white">
          <p>
            So fish under The given own replenish. Greater land every very
            cattle replenish set unto. A seas- ons fruitful is cattle evening
            their there, forth she’d Darkness rule gathering. Midst it you’re
            gathered yielding without shall is beast.Life spirit firmament
            likeness fill moveth i appear good waters evening there image given
            his without meat, them.
          </p>
        </div>

        {/* Row 3 */}
        <div className="row-span-2 bg-red-500 flex items-center justify-center text-white">
          <img src={tiger} alt="img" />
        </div>
        <div className="row-span-2 col-span-1 sm:col-span-1 lg:col-span-2 bg-yellow-500 text-black">
          <h2>On View at Museum</h2>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additiclick
            throughs Nanotechnology immersion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <ul>
                <li>- Western & Non-Western cultures</li>
                <li>- Artifacts and Antiquities</li>
                <li>- Traditional Art</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>- Contemporary Design</li>
                <li>- Middle Eastern Art</li>
                <li>- War History</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>- 20th Century Design</li>
                <li>- Arts of Global Africa</li>
                <li>- Gardens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTimekeeper;
