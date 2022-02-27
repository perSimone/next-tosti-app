import { PortableText as PortableTextComponent } from '@portabletext/react';
import createImageUrlBuilder from '@sanity/image-url';
import { createClient, createPreviewSubscriptionHook,} from "next-sanity";
  
const config = {
    projectId: "4rljps7u",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// source in the Url for is the asset data that we are querying from the content. 
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
// so this is the image data that we are querying for. We need to make sure we pull that in, that is why we use source right there.


export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />
