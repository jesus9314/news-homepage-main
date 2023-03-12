import React from 'react'
import { SummaryContent } from './SummaryContent'

export const NewsSummary = () => {
  return (
    <div className="bg-VeryDarkBlue text-white p-6 mt-16 md:w-1/4">
        <h2 className="text-SoftOrange text-4xl font-bold my-6">New</h2>
        <div className="flex flex-col gap-4 divide-y divide-gray-500">
            <SummaryContent>
                Will Hydrongen-fueled cars ever catch up to EVs?
            </SummaryContent>
            <SummaryContent>
                What are the possible adverse effects of on demand AI image generation?
            </SummaryContent>
            <SummaryContent>
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </SummaryContent>
        </div>
    </div>
  )
}
