'use client';

import { Button } from '@/components/shadcn/ui/button';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { useState } from 'react';

interface IPropsButtonSend {
  send: (text: string) => void;
}

export default function ButtonSend({ send }: IPropsButtonSend) {
  const [text, setText] = useState('');

  return (
    <div className="flex gap-2 items-center bg-white transition-all">
      <Textarea
        placeholder="Type your message here."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="secondary"
        onClick={() => {
          if (text === '' || text.trim() === '') return false;
          send(text);
          setText('');
        }}
      >
        <PaperPlaneIcon className="-rotate-45" />
      </Button>
    </div>
  );
}
