//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  type CardGroupParentPayload,
  type CardGroupPayload,
} from '@/PalacePackage/utils/interfaces/payload';

import CardGroup from '@/PalacePackage/components/CardGroup/CardGroup';
import type { StudiesCardPayload } from '@/utils/payload';

//---------------------COMPONENT---------------------
function StudyCardGroup(payload: CardGroupPayload) {
  function setObject(object: StudiesCardPayload) {
    const { title, subtitle, year, place } = object;
    if (window.innerWidth >= 810) {
      const head: React.ReactNode = <>
        <div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>

        <div>
          <h3>{year}</h3>
          <h4>{place}</h4>
        </div>
      </>;

      return { head };
    }
    const head: React.ReactNode = <>
      <div>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
        <h3>{year}</h3>
      </div>
    </>;

    return { head };
  }

  return CardGroup<StudiesCardPayload>(
    { payload, setObject } as CardGroupParentPayload);
}

export default StudyCardGroup;