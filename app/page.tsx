'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { MemePreview } from '@/components/MemePreview'
import { AffectMeme } from '@/components/memes/AffectMeme'
import { BurnThePaperMeme } from '@/components/memes/BurnThePaperMeme'
import { ChangeMyMindMeme } from '@/components/memes/ChangeMyMindMeme'
import { CheersMeme } from '@/components/memes/CheersMeme'
import { CheaterStudentsMeme } from '@/components/memes/CheaterStudentsMeme'
import { ChooseRoadMeme } from '@/components/memes/ChooseRoadMeme'
import { DeleteMeme } from '@/components/memes/DeleteMeme'
import { DisappointedBlackManMeme } from '@/components/memes/DisappointedBlackManMeme'
import { MemeGeneratorMeme } from '@/components/memes/MemeGeneratorMeme'
import { HitlerMeme } from '@/components/memes/HitlerMeme'
import { MyHeartMeme } from '@/components/memes/MyHeartMeme'
import { NaughtySpongeBobMeme } from '@/components/memes/NaughtySpongeBobMeme'
import { NoYesMeme } from '@/components/memes/NoYesMeme'
import { PrisonersMeme } from '@/components/memes/PrisonersMeme'
import { SadBlackManMeme } from '@/components/memes/SadBlackManMeme'
import { SpongeBobShoutingMeme } from '@/components/memes/SpongeBobShoutingMeme'
import { ShitMeme } from '@/components/memes/ShitMeme'
import { TrashMeme } from '@/components/memes/TrashMeme'
import { TeachingTeacherMeme } from '@/components/memes/TeachingTeacherMeme'
import { UpsetStudentsMeme } from '@/components/memes/UpsetStudentsMeme'
import { WritingOnBoardMeme } from '@/components/memes/WritingOnBoardMeme'
import { YeetTheChildMeme } from '@/components/memes/YeetTheChildMeme'
// import {UploadPage} from '@/components/memes/UrlGen'



type MemeKey = keyof typeof memeComponents;

const memeComponents = {
  // 'Upload Page': UploadPage,
  'Affect': AffectMeme,
  'Burn the Paper': BurnThePaperMeme,
  'Change My Mind': ChangeMyMindMeme,
  'Cheers': CheersMeme,
  'Cheater Students': CheaterStudentsMeme,
  'Choose Road': ChooseRoadMeme,
  'Delete': DeleteMeme,
  'Disappointed Black Man': DisappointedBlackManMeme,
  'Meme Generator': MemeGeneratorMeme,
  'Hitler': HitlerMeme,
  'My Heart': MyHeartMeme,
  'Naughty SpongeBob': NaughtySpongeBobMeme,
  'No Yes': NoYesMeme,
  'Prisoners': PrisonersMeme,
  'Sad Black Man': SadBlackManMeme,
  'SpongeBob Shouting': SpongeBobShoutingMeme,
  'Shit': ShitMeme,
  'Trash': TrashMeme,
  'Teaching Teacher': TeachingTeacherMeme,
  'Upset Students': UpsetStudentsMeme,
  'Writing on Board': WritingOnBoardMeme,
  'Yeet the Child': YeetTheChildMeme,
  
}

export default function Home() {
  const [selectedMeme, setSelectedMeme] = useState<MemeKey>('Affect');
  const [memeUrl, setMemeUrl] = useState('')

  // Dynamically select the meme component based on selectedMeme
  const MemeComponent = memeComponents[selectedMeme]

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setSelectedMeme={setSelectedMeme} />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">{selectedMeme} Meme</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {/* Dynamically render the selected Meme Component */}
            <MemeComponent setMemeUrl={setMemeUrl} />
          </div>
          <div>
            <MemePreview memeUrl={memeUrl} />
          </div>
        </div>
      </main>
    </div>
  )
}