import { useEffect, useRef, useState } from 'react';
import { Button, Input } from 'react-vant';

type IProps = {
  value?: string;
  onChange?: (value: string) => void;
  send: () => Promise<boolean | void>;
};
export default (props: IProps) => {
  const { send, value, onChange } = props;
  const timerRef = useRef<NodeJS.Timeout>();
  const [countdown, setCountdown] = useState(-1);
  useEffect(() => {
    if (countdown < 0) {
      clearTimeout(timerRef.current);
      return;
    }
    timerRef.current = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [countdown]);
  return (
    <Input
      value={value}
      onChange={onChange}
      suffix={
        countdown >= 0 ? (
          <div style={{ width: '70rem' }}>{countdown}</div>
        ) : (
          <Button
            size="small"
            type="primary"
            onClick={async () => {
              const res = await send();
              if (res !== false) {
                setCountdown(120);
              }
            }}
          >
            发 送
          </Button>
        )
      }
      placeholder="请输入验证码"
    />
  );
};
