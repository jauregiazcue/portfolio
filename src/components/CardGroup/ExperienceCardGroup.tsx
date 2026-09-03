//-------------------------------------------------
//---------------------IMPORTS---------------------
//--react > interface > tools > components > scss--
import {
  type CardGroupParentPayload,
  type CardGroupPayload,
} from '@/PalacePackage/utils/interfaces/payload';

import CardGroup from '@/PalacePackage/components/CardGroup/CardGroup';
import type { ProjectCardPayload } from '@/utils/payload';

//---------------------COMPONENT---------------------
function ExperienceCardGroup(payload: CardGroupPayload) {
  function setObject(object: ProjectCardPayload) {
    const { title, description, year } = object;
    const head: React.ReactNode = <>
      <h3>{title}</h3>
      <h3>{year}</h3>
    </>;

    const body: React.ReactNode = <>
      {description && <p>{description}</p>}
    </>;

    return { head, body };
  }

  return CardGroup<ProjectCardPayload>(
    { payload, setObject } as CardGroupParentPayload);
}

export default ExperienceCardGroup;