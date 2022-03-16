import { useAccount, useBalance } from 'wagmi';
import Davatar from '@davatar/react';
import { LogoutIcon } from '@heroicons/react/solid';
import Modal from './modal';

export const Connect = () => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data }] = useBalance({
    addressOrName: accountData?.address,
    formatUnits: 'ether',
  });

  if (accountData) {
    const splitAddress =
      accountData.address?.substr(0, 6) +
      `....` +
      accountData.address?.substr(
        accountData.address.length - 5,
        accountData.address.length - 1
      );
    return (
      <>
        <div
          className="author-button-area"
          style={{ marginTop: '-1px' }}
        >
          <span className="btn at-follw follow-button">
            <i data-feather="user-plus"></i>{' '}
            {parseFloat(data?.formatted || '').toFixed(2)}{' '}
          </span>
          <span className="btn at-follw follow-button">
            <i data-feather="user-plus"></i> {data?.symbol}
          </span>
          <span className="btn at-follw follow-button">
            <i data-feather="user-plus"></i>{' '}
            {accountData.ens?.name
              ? accountData.ens?.name
              : splitAddress}
          </span>
          <span className="btn at-follw follow-button">
            <Davatar
              size={20}
              address={accountData.address}
              generatedAvatarType="jazzicon" // optional, 'jazzicon' or 'blockies'
            />
          </span>
          <span className="btn at-follw follow-button">
            <button onClick={disconnect}>
              <LogoutIcon />
            </button>
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Modal />
      </div>
    </>
  );
};
