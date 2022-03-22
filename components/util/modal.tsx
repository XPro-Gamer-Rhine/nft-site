import React from 'react';
import Image from 'next/image';
import { useConnect } from 'wagmi';

const Modal = () => {
  const [{ data, error }, connect] = useConnect();
  return (
    <>
      <div
        className="setting-option rbt-site-header"
        id="rbt-site-header"
      >
        <div className="icon-box">
          <a
            id="connectbtn"
            className="btn btn-primary-alta btn-small"
            data-bs-toggle="modal"
            data-bs-target="#walletConnectModal"
          >
            Wallet connect
          </a>
        </div>
      </div>
      <div
        className="rn-popup-modal placebid-modal-wrapper modal fade"
        id="walletConnectModal"
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x"></i>
        </button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {data.connectors.map((x) => (
              <button
                className="flex flex-col justify-center p-6 py-8 btn btn-primary-alta mt--20"
                key={x.id}
                onClick={() => connect(x)}
                data-bs-dismiss="modal"
              >
                {x.name == 'MetaMask' ? (
                  <Image
                    src="/metamask.svg"
                    width="50"
                    height="50"
                    alt="Metamask Logo"
                    className="justify-center"
                  />
                ) : x.name == 'WalletConnect' ? (
                  <Image
                    src="/wallet-connect.svg"
                    width="50"
                    height="50"
                    alt="Metamask Logo"
                  />
                ) : (
                  <Image
                    src="/coinbase.svg"
                    width="80"
                    height="80"
                    alt="Metamask Logo"
                  />
                )}
                <div className="mt-1 text-center">
                  <h2 className="text-2xl font-semibold dark:text-gray-900">
                    {x.name} Connect
                  </h2>
                </div>
                {!x.ready && ' (unsupported)'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
