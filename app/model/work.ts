export type Work = {
  id: string;
  title: string;
  description: string;
  previewImageUrl: string;
  previewImagePlaceholder: string;
  skills: string[];
  type: string;
  links: {
    demo: string | undefined;
    github: string;
  };
};
