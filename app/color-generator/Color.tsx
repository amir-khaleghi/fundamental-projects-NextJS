const Color = ({ index, color, toast }) => {
  // console.log(color);

  const { hex, weight } = color;

  // save color to clipboard with navigator feature of browser
  const saveClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);

        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy color to clipboard');
      }
    } else {
      toast.error('Not available!');
    }
  };
  return (
    <article
      onClick={saveClipboard}
      className={`w-full h-20 cursor-pointer flex items-start justify-start p-2 border flex-col ${
        index > 10 ? 'text-white' : ''
      }`}
      style={{ background: `#${hex}` }}
    >
      <div>{weight}%</div>
      <div>#{hex}</div>
    </article>
  );
};

export default Color;
