import { Button } from "@/components/ui/button";

const EditorButton = ({
  editor,
  action,
  isActive,
  icon: Icon,
  options = {},
}) => {
  const handleClick = () => {
    editor.chain().focus()[action](options).run();
  };

  return (
    <Button
      onClick={handleClick}
      className={isActive ? "is-active bg-secondary" : ""}
      size='icon'
      variant='ghost'>
      <Icon strokeWidth={1.5} className='w-4 h-4' />
    </Button>
  );
};

export default EditorButton;
