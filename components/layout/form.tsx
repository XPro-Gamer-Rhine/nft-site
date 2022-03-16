import React, { useState } from 'react';
import useUploadData from '../../hooks/useUploadData';

const NftForm = () => {
  const [upload] = useUploadData();
  const [url, setUrl] = useState<string>('');
  const [tire, setTire] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [agility, setAgility] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [stamina, setStamina] = useState<string>('');
  const [health, setHealth] = useState<string>('');
  const [luck, setLuck] = useState<string>('');
  const handleSubmit = () => {
    console.log({
      url,
      tire,
      breed,
      agility,
      weight,
      stamina,
      health,
      luck,
    });
    upload(url, tire, breed, agility, weight, stamina, health, luck);
  };
  return (
    <div className="create-area rn-section-gapTop">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="form-wrapper-one">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-box pb--20">
                    <label htmlFor="name" className="form-label">
                      Token URL
                    </label>
                    <input
                      placeholder="e. g. `IPFS URL`"
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label
                      htmlFor="dollerValue"
                      className="form-label"
                    >
                      TIRE
                    </label>
                    <input
                      onChange={(e) => setTire(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label htmlFor="Size" className="form-label">
                      BREED COUNT
                    </label>
                    <input
                      onChange={(e) => setBreed(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label htmlFor="Propertie" className="form-label">
                      AGILITY
                    </label>
                    <input
                      onChange={(e) => setAgility(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label htmlFor="Propertie" className="form-label">
                      WEIGHT
                    </label>
                    <input
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label htmlFor="Propertie" className="form-label">
                      STAMINA
                    </label>
                    <input
                      onChange={(e) => setStamina(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label htmlFor="Propertie" className="form-label">
                      HEALTH
                    </label>
                    <input
                      onChange={(e) => setHealth(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label htmlFor="Propertie" className="form-label">
                      LUCK
                    </label>
                    <input
                      onChange={(e) => setLuck(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                  <div className="input-box">
                    <button
                      className="btn btn-primary btn-large w-100"
                      onClick={handleSubmit}
                    >
                      Submit Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftForm;
