import * as React from 'react';
import { MiniToolboxIcon } from '../miniToolbox/MiniToolboxIcon';
import { MiniToolboxItem } from '../miniToolbox/MiniToolboxItem';
import { MiniToolboxWrapper } from '../miniToolbox/MiniToolboxWrapper';

interface Props {
  x: number;
  y: number;
  opacity: number;
  visible: boolean;
  inverted: boolean;
  setVisibility: (value: boolean) => void;
  setInverted: (value: boolean) => void;
  setOpacity: (value: number) => void;
  remove: () => void;
}

export const OnionToolbox = ({
  x,
  y,
  inverted,
  opacity,
  visible,
  setInverted,
  setOpacity,
  setVisibility,
  remove
}: Props) => (
  <MiniToolboxWrapper>
    <MiniToolboxItem
      title={`Set opacity to ${opacity !== 1 ? '1' : '0.5'}`}
      onClick={() => setOpacity(opacity !== 1 ? 1 : 0.5)}
    >
      <MiniToolboxIcon icon="percent" />
    </MiniToolboxItem>
    {/* <MiniToolboxItem title="" onClick={() => setVisibility(!visible)}>
      <MiniToolboxIcon icon={visible ? 'eye' : 'eye-off'} />
    </MiniToolboxItem> */}
    <MiniToolboxItem
      title="Invert colors"
      onClick={() => setInverted(!inverted)}
    >
      <MiniToolboxIcon icon={inverted ? 'sun' : 'moon'} />
    </MiniToolboxItem>
    <MiniToolboxItem title="Remove" onClick={() => remove()}>
      <MiniToolboxIcon icon="trash-2" />
    </MiniToolboxItem>
  </MiniToolboxWrapper>
);
